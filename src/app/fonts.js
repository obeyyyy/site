// components/Icons.tsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faProjectDiagram, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faJava, faTwitter, faLinkedin, faGithub, faReact,faPython, faHtml5, faCss3, faMarkdown, faNodeJs, } from '@fortawesome/free-brands-svg-icons';

// Add the icons to the library
library.add(faHome, faInfoCircle, faProjectDiagram, faEnvelope, faJava, faTwitter, faLinkedin, faGithub, faReact,faPython, faHtml5, faCss3, faMarkdown, faNodeJs, faDownload);

export const HomeIcon = () => <FontAwesomeIcon icon="home" />;
export const AboutIcon = () => <FontAwesomeIcon icon="info-circle" />;
export const ContactIcon = () => <FontAwesomeIcon icon="envelope" />;
export const ProjectsIcon = () => <FontAwesomeIcon icon="project-diagram" />;
export const JavaIcon = ({size}) => <FontAwesomeIcon icon={['fab', 'java']} size={size} />;
export const TwitterIcon = ({size}) => <FontAwesomeIcon icon={['fab', 'twitter']} size={size} />;
export const LinkedInIcon = () => <FontAwesomeIcon icon={['fab', 'linkedin']} />;
export const GithubIcon = ({size}) => <FontAwesomeIcon icon={['fab', 'github']} size={size} />;
export const ReactIcon = ({size}) => <FontAwesomeIcon icon = {['fab' , 'react']} size={size} />;
export const PythonIcon = ({size}) => <FontAwesomeIcon icon = {['fab' , 'python']} size={size} />;
export const Html5Icon = ({size}) => <FontAwesomeIcon icon = {['fab' , 'html5']} size={size} />;
export const Css3Icon = ({size}) => <FontAwesomeIcon icon = {['fab' , 'css3']} size={size} />;
export const NodeJsIcon = ({size}) => <FontAwesomeIcon icon = {['fab' , 'node-js']} size={size} />;
export const MarkdownIcon = ({size}) => <FontAwesomeIcon icon = 'download' size={size}/>;