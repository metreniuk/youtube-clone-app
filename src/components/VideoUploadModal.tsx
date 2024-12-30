import { useState } from 'react'
import { Video } from '../lib/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface VideoUploadModalProps {
  isOpen: boolean
  onClose: () => void
  onUpload: (video: Video) => void
}

export default function VideoUploadModal({ isOpen, onClose, onUpload }: VideoUploadModalProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title && description && file) {
      const newVideo: Video = {
        id: Date.now().toString(),
        title,
        description,
        thumbnailUrl: URL.createObjectURL(file),
        videoUrl: URL.createObjectURL(file),
      }
      onUpload(newVideo)
      onClose()
      setTitle('')
      setDescription('')
      setFile(null)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Video</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="file">Video File</Label>
            <Input
              id="file"
              type="file"
              accept="video/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              required
            />
          </div>
          <Button type="submit">Upload</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

