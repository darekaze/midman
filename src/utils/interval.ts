/**
 * A recursion function to set count interval.
 *
 * @param fn Function to execute
 * @param delay Delay in ms
 * @param times Number of time to run the interval
 */
export const setCountInterval = (fn: () => void, delay: number, times: number) => {
	if (times <= 0) return

	setTimeout(() => {
		fn()
		setCountInterval(fn, delay, times - 1)
	}, delay)
}
