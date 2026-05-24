import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { orbitTeamIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: orbitTeamIcon,
	edit: Edit
});