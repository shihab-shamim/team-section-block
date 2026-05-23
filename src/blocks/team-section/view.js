	import { createRoot } from 'react-dom';

	import './style.scss';
	import Style from './Components/Common/Style';
	import Theme5 from './Components/Common/themes/Theme5';
	import Theme6 from './Components/Common/themes/Theme6';
	import Theme7 from './Components/Common/themes/Theme7';
	import Theme8 from './Components/Common/themes/Theme8';
	import Theme9 from './Components/Common/themes/Theme9';
	import Theme10 from './Components/Common/themes/Theme10';
	import Theme11 from './Components/Common/themes/Theme11';
	import {sanitizeURL,sanitizeHTML}  from "../../bpl-tools/utils/common"

	document.addEventListener('DOMContentLoaded', () => {
		const teamEls = document.querySelectorAll('.wp-block-tsb-team');
		teamEls.forEach(teamEl => {
			const attributes = JSON.parse(teamEl.dataset.attributes);
	//  const pipecheck = teamEl.dataset.pipecheck ?? false;
	const isPremium=tsmbpipecheck

			const { members = [], columns, layout, isLinkNewTab, isTitle, isSep, isBio, isSocial,theme } = attributes;
			const { desktop, tablet, mobile } = columns || {};

// 			const handlePricinnNavigate = () => {
//         window.open(
// 			'wp-admin/edit.php?post_type=tsb&page=team-section-dashboard#/pricing',
//                                 '_blank',
//                                 'noopener,noreferrer'
//                             );
//   };
	const themeSwitch=(theme)=>{
		if("theme5"===theme) return <Theme5 attributes={attributes}/>
		if("theme6" === theme) return <Theme6  attributes={attributes}/>
		if("theme7" === theme) return <Theme7  attributes={attributes}/>
		if("theme8" === theme) return <Theme8  attributes={attributes}/>
		if("theme9" === theme) return <Theme9  attributes={attributes}/>
		if("theme10" === theme) return <Theme10  attributes={attributes}/>
		if("theme11" === theme) return <Theme11  attributes={attributes}/>


	}
			createRoot(teamEl).render(<>
				<Style attributes={attributes} id={teamEl.id} />

				{/* <div className='tsm-premium-slider-wrapper'> */}
					{
					["default","theme1","theme2","theme3","theme4"].includes(theme) &&<div className={`tsbTeamMembers ${layout || 'vertical'} columns-${desktop} columns-tablet-${tablet} columns-mobile-${mobile}`}>
					{members.map((item, index) => {
						const { photo, name, title, bio, social = [] } = item;

						return <div key={index} className='tsbMember' id={`tsbMember-${index}`}>
							{photo?.url && <img className='memberPhoto' src={photo.url} alt={photo?.alt} />}

							<div className='memberDetails'>
								{name && <h4 className='memberName' dangerouslySetInnerHTML={{ __html: sanitizeHTML(name) }} />}
								{isTitle && title && <p className='memberTitle' dangerouslySetInnerHTML={{ __html: sanitizeHTML(title) }} />}
								{isSep && <span className='memberSeparator' />}
								{isBio && bio && <p className='memberBio' dangerouslySetInnerHTML={{ __html: sanitizeHTML(bio) }} />}

								{isSocial && <ul className='memberSocial'>
									{social?.map((socialItem, socialIndex) => {
										const { link, icon } = socialItem;
										const safeUrl=sanitizeURL(link) || "#"

										return <li key={socialIndex} className={`icon icon-${index}-${socialIndex}`}>
											<a href={safeUrl} target={isLinkNewTab ? '_blank' : '_self'} rel="noreferrer">
												<i className={icon?.class} />
											</a>
										</li>;
									})}
								</ul>}
							</div>
						</div>;
					})}
				</div>
				}
				
				{!isPremium && !["default","theme1","theme2","theme3","theme4"].includes(theme)?<div className='tsm-premium-slider-wrapper'>
					{themeSwitch(theme)}
					<div className="tsm-premium-overlay">
			<div className="tsm-premium-overlay-content">
				<p>This theme is available in the Pro version.</p>
				<a href='/wp-admin/edit.php?post_type=tsb&page=team-section-dashboard#/pricing' target='_blank'  className="tsm-upgrade-btn">Upgrade to Pro</a>
			</div>
			</div>
				</div>:themeSwitch(theme) }
				
			
				
			</>);

			teamEl?.removeAttribute('data-attributes');
		});
	});