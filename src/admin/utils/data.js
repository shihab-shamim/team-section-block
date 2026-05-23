	import { gridIcon, masonryIcon, sliderIcon, tickerIcon } from '../../utils/icons';

	const slug = 'team-section';

	export const dashboardInfo = (info) => {
		const { version, isPremium, hasPro, licenseActiveNonce, nonce } = info;

		const proSuffix = isPremium ? ' Pro' : '';

		return {
		name: `Team Section Block ${proSuffix}`,
		displayName: `Team Section Block ${proSuffix} – Showcase Team Members with Layout Options
	`,
		description:
		"This block plugin makes the displays fully customizable, so you can create unique team showcases for your site. This is the best WordPress team plugin that displays in a fantastic way of your team members on your site. It is 100% responsive and mobile-friendly, which guarantees the best views across all devices.",
		slug,
		version,
		isPremium,
		hasPro,
		displayOurPlugins: true,
		media: {
		logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
		banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
		thumbnail: `https://ps.w.org/team-section/assets/icon-128x128.png?rev=2694562`,
		//   proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/parallax-section.png`,
		// video: "https://www.youtube.com/watch?v=milYZrqLJsE",
		// isYoutube: false,
		},
		pages: {
		org: `https://wordpress.org/plugins/${slug}/`,
		// landing: `https://bplugins.com/products/${slug}/`,
		docs: `https://bplugins.com/docs/${slug}/`,
		pricing: `https://bplugins.com/products/${slug}/pricing`,
		},
		freemius: {
		product_id: 21587,
		plan_id: 36015,
		public_key: "pk_3ba5bf1bfe18f86fccd5a5995ae77",
		},
		licenseActiveNonce,
		changelogs: [
		{
			version: "2.0.2",
			type: "update",
			list: ["Admin Dashboard Updated"],
		},
			{
			version: '2.0.1',
			type: "update",
			list: [
				'Fixed: Button link sanitization issue.'
				
			]
		},
		{
			version: '2.0.0',
			type: "update",
			list: [
				'Universal Shortcodes: Compatible with all page builders',
				'11+ ready-made themes.'
			]
		},
		
	
		],
		proFeatures: [
   "Universal Shortcodes – Works with all page builders",
  "Includes 11+ ready-to-use templates",
  "Multiple Team Layouts – Modern and creative designs",
  "Fully Responsive – Looks great on all devices",
  "Member Styling – Customize photo, name, title, and bio",
  "Typography & Color Controls – Full text and color customization",
  "Photo Effects – Size, filter, and hover effects",
  "Social Icons – Add and style social media links",
  "Element Visibility – Show or hide any member content",
  "Hover Effects & Animations – Smooth interactive effects",
  "Layout Controls – Width, alignment, spacing options",
  "Theme-Specific Features – Shapes, serials, stats, and more",
  "Beginner Friendly – No coding required",
		],
		startButton: {
		label: "Start Now",
		url: `wp-admin/post-new.php?post_type=page&title=Team Section Block&content=<!-- wp:tsb/team /-->&nonce=${nonce}`,
		},
	};
	}

	export const demoInfo = {
		// allInOneLabel: 'See All Demos',
		// allInOneLink: 'https://apb.bplugins.com/all-demos-in-one-place/',
		demos: [{
			icon: '',
			title: 'Default',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/team-section-default/'
		},
		{
			icon: '',
			title: 'Theme-1',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/theme-1/'
		},
		{
			icon: '',
			title: 'Theme-2',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/theme-2/'
		},
		
		{
			icon: '',
			title: 'Theme-3',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/theme-3/'
		},
		{
			icon: '',
			title: 'Theme-4',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/theme-4-2/'
		},
		{
			icon: '',
			title: 'Theme-5 ',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/theme-5-2/'},
		{
			icon: '',
			title: 'Theme-6',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/theme-6-2/'
		},
		
		
		{
			icon: '',
			title: 'Theme-7',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/theme-7-2/'
		},
		{
			icon: '',
			title: 'Theme-8',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/theme-8-2/'
		},
		{
			icon: '',
			title: 'Theme-9',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/theme-9/'
		},
		
		{
			icon: '',
			title: 'Theme-10',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/theme-10/'
		},
		
		{
			icon: '',
			title: 'Theme-11',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/theme-11/'
		},
		
		
	]
	}

	export const pricingInfo = {
	logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
	pluginId: 21587,
	planId:  36015,
	licenses: [1, 3, null],
	button: {
		label: "Buy Now ➜",
	},
	featured: {
		selected: 3, // choose from licenses item
	},
	};