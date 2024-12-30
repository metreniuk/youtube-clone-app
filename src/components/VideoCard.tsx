import { Video } from '../lib/types'
import Image from 'next/image'

interface VideoCardProps {
  video: Video
  isUploading?: boolean
  onDelete: (id: string) => void
  onClick: () => void
}

export default function VideoCard({ video, isUploading, onDelete, onClick }: VideoCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
      <button
        onClick={() => onDelete(video.id)}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 z-10"
        aria-label="Delete video"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <button
        onClick={onClick}
        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
      >
        {isUploading ? (
          <div className="flex items-center justify-center h-[180px] bg-gray-200">
            <p className="text-gray-600">Uploading...</p>
          </div>
        ) : (
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            width={320}
            height={180}
            className="w-full object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
          <p className="text-gray-600 text-sm">{video.description}</p>
        </div>
      </button>
    </div>
  )
}

