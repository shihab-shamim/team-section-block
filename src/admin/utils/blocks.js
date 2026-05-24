/**
 * blocks.js — Single source of truth for ALL blocks in the Team Section plugin.
 * Mirrors: info-cards/src/admin/utils/blocks.js
 *
 * Used by:
 *   - Blocks page  (admin dashboard toggle UI)
 *   - Card component on Welcome page
 *
 * Fields:
 *   name      {string}  — must match the build/blocks/<name> folder
 *   title     {string}  — human-readable label
 *   icon      {JSX}     — SVG icon for the block
 *   isPremium {boolean} — true = pro block (locked without license)
 *   required  {boolean} — if true, cannot be toggled off
 */

import { orbitTeamIcon, teamMembersIcon } from '../../blocks/team-section/utils/icons';

export default [
	{
		name: 'team-section',
		title: 'Team Section',
		icon: teamMembersIcon,
		isPremium: false,
		required: true,
	},
	{
		name: 'orbit-team-section',
		title: 'Orbit Team',
		icon: orbitTeamIcon,
		isPremium: true,
		required: false,
	}

];
