import { useMutation } from 'react-query'
import { PublishService } from 'services/Publish.service'

export default function usePublish() {
	// const queryData = useQuery('Clips list', () => PublishService.getAllClips(), {
	// 	select: ({ data }) => data,
	// })

	const { mutateAsync: createClipAsync } = useMutation('create clip publish', data =>
		PublishService.createClip(data).then(response => {
			
		})
	)

	

	return {
		// queryData,
		createClipAsync,
	}
}
