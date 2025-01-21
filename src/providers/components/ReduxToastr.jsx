import ReduxToastrLib from 'react-redux-toastr'

export default function ReduxToastr() {
	return (
		<ReduxToastrLib
			newestOnTop={false}
			preventDuplicates
			progressBar
			timeOut={5_000}
			closeOnToastrClick
			transitionIn='fadeIn'
			transitionOut='fadeOut'
		/>
	)
}
