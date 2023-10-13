import USER from '../../config/user';
import './Main.css';

function Main() {
	return (
		<main className="flex flex-col items-center content-center w-1/2 mx-auto">
			<img className="h-auto w-28 " src={USER.img} alt="avatar" />
			<h1 className="mb-2 text-3xl font-bold">
				{USER.name ?? 'UserName'}
			</h1>
			<p className="text-md text-zinc-400">
				{USER.about ?? 'tell something about yourself'}
			</p>
			<div className="">{/* icons here */}</div>
			<div className=""></div>
		</main>
	);
}

export default Main;
