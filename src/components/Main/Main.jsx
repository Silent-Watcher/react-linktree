/* eslint-disable react/jsx-key */

import './Main.css';

import Social from '../Social/Social';
import USER from '../../config/user';

function Main() {
	let socials = Object.entries(USER.socials)?.filter(([, link]) => link);
	return (
		<main className="flex flex-col items-center content-center w-1/2 mx-auto">
			<img className="h-auto w-28 " src={USER.img} alt="avatar" />
			<h1 className="mb-2 text-3xl font-bold">
				{USER.name ?? 'UserName'}
			</h1>
			<p className="text-md text-zinc-400">
				{USER.about ?? 'tell something about yourself'}
			</p>
			<div className="flex items-center content-center w-full mt-5 text-2xl text-center md:w-1/2 lg:w-1/4 ">
				{socials.map(([social, href]) => (
					<Social link={href} icon={social} />
				))}
			</div>
			<div className=""></div>
		</main>
	);
}

export default Main;
