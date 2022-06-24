import { useState } from 'react'
import { useQuery } from 'react-query'
import toast from 'react-hot-toast'
import { getAllVideos } from '../services/videos'

export const useGetAllVideos = () => {
	const { isLoading, data } = useQuery('allVideos', getAllVideos)

	return {
		videos: data,
		isLoading,
	}
}
