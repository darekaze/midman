import {component$} from '@builder.io/qwik'
import type {DocumentHead} from '@builder.io/qwik-city'
import {RedirectLink} from '~/components/redirect-link'

/**
 * Homepage of the website
 * Show introduction and demo for redirecting
 */
export default component$(() => {
	return (
		<div>
			<h1>
				Welcome to MidMan <span class="lightning">⚡️</span>
			</h1>

			<ul>
				<li>This site acts as a middleman for passing sensitive URLs.</li>
				<li>Support any domains. No fancy stuff behind.</li>
				<li>More features to be added. (e.g. Anti Adblock)</li>
			</ul>

			<h2>Demo Links</h2>

			<table class="commands">
				<tr>
					<td>Using Cloudflare Pages</td>
					<td>
						<RedirectLink
							link="https://midman.pages.dev/redirect"
							redirectLink="https://bangumi.moe/"
							text="Link to Bangumi"
						/>
					</td>
				</tr>
				<tr>
					<td>Using Vercel</td>
					<td>
						<RedirectLink
							link="https://midman.vercel.app/redirect"
							redirectLink="https://custom-roms.com/"
							text="Link to CustomRoms"
						/>
					</td>
				</tr>
				<tr>
					<td>Using Netlify</td>
					<td>
						<RedirectLink
							link="https://middyman.netlify.app/redirect"
							redirectLink="https://nyaa.si/"
							text="Link to Nyaa"
						/>
					</td>
				</tr>
				<tr>
					<td>Same Origin (testing only)</td>
					<td>
						<RedirectLink
							isSameOrigin
							link="/redirect"
							redirectLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
							text="Link to somewhere..."
						/>
					</td>
				</tr>
			</table>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'Home',
}
