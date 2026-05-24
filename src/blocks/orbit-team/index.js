import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { orbitTeamIcon } from './utils/icons';

// Check if premium is active safely
const isPremium = typeof window !== 'undefined' && window.TSB_BLOCK_DATA && window.TSB_BLOCK_DATA.isPremium;

const blockMetadata = { ...metadata };
if (blockMetadata.supports) {
	blockMetadata.supports = {
		...blockMetadata.supports,
		inserter: isPremium
	};
} else {
	blockMetadata.supports = { inserter: isPremium };
}

registerBlockType(blockMetadata, {
	icon: orbitTeamIcon,
	edit: Edit
});