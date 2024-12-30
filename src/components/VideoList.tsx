'use client'

import { useState } from 'react'
import { Video } from '../lib/types'
import VideoCard from './VideoCard'
import VideoUploadModal from './VideoUploadModal'
import { Button } from '@/components/ui/button'
import VideoWatchModal from './VideoWatchModal'

export default function VideoList() {
  const [videos, setVideos] = useState<Video[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [uploadingVideos, setUploadingVideos] = useState<string[]>([])
  const [watchingVideo, setWatchingVideo] = useState<Video | null>(null)

  const addVideo = (video: Video) => {
    setUploadingVideos([...uploadingVideos, video.id])
    setTimeout(() => {
      setVideos([...videos, video])
      setUploadingVideos(uploadingVideos.filter(id => id !== video.id))
    }, 3000) // Simulate a 3-second upload
  }

  const deleteVideo = (id: string) => {
    setVideos(videos.filter(video => video.id !== id))
  }

  const handleVideoClick = (video: Video) => {
    setWatchingVideo(video)
  }

  return (
    <div className="h-[calc(100vh-64px)] overflow-y-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Uploaded Videos</h2>
        <Button onClick={() => setIsModalOpen(true)}>Upload Video</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            isUploading={uploadingVideos.includes(video.id)}
            onDelete={deleteVideo}
            onClick={() => handleVideoClick(video)}
          />
        ))}
      </div>
      <VideoUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpload={addVideo}
      />
      <VideoWatchModal
        isOpen={watchingVideo !== null}
        onClose={() => setWatchingVideo(null)}
        video={watchingVideo}
      />
    </div>
  )
}

