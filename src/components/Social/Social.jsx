import PropTypes from 'prop-types';

import './Social.css';

import { AiOutlineGitlab } from 'react-icons/ai';
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

function Social({ link, icon }) {
	return (
		<a
			className="block w-full text-center text-blue-400 hover:text-blue-500"
			href={link}
			target="_blank"
			rel="noreferrer"
		>
			{icon === 'github' && <FaGithub className="w-full " />}
			{icon === 'gitlab' && <AiOutlineGitlab className="w-full " />}
			{icon === 'linkedin' && <BiLogoLinkedin className="w-full " />}
			{icon === 'gmail' && <BiLogoGmail className="w-full " />}
		</a>
	);
}

export default Social;

Social.propTypes = {
	link: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};
