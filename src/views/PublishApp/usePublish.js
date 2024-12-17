import { useMutation } from 'react-query'
import { PublishService } from 'services/Publish.service'

export default function usePublish() {
	// const queryData = useQuery('Clips list', () => PublishService.getAllClips(), {
	// 	select: ({ data }) => data,
	// })

	const { mutatedAsync: createClipAsync } = useMutation('create clip', data =>
		PublishService.createClip(data).then(data => {
			if (200 <= data.status < 300) {
				queryData.refetch()
				focusManager.setFocused(undefined)
				focusManager.setFocused(true)
			}
		})
	)

	return {
		queryData,
	}
}
