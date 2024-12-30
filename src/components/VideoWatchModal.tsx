import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Video } from '../lib/types'

interface VideoWatchModalProps {
  isOpen: boolean
  onClose: () => void
  video: Video | null
}

export default function VideoWatchModal({ isOpen, onClose, video }: VideoWatchModalProps) {
  if (!video) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{video.title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full">
          <video src={video.videoUrl} controls className="w-full h-full">
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="mt-4 text-sm text-gray-600">{video.description}</p>
      </DialogContent>
    </Dialog>
  )
}

