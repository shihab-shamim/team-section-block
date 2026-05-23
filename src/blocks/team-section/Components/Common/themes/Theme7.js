import { useRef } from "react";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";

const Theme7 = ({ attributes, ReusableRichText, setAttributes }) => {
  const {
    members = [],
    options = {},

  } = attributes || {};
  const { isShowWaterMark = true, waterMark = "THE TEAM" } = options


  const radiosRef = useRef([]);

  const handleRadioClick = (index) => (e) => {
    e.preventDefault();
    const radio = radiosRef.current[index];
    setTimeout(() => {
      radio.checked = !radio.checked;
    }, 0);
  };


  return (
    <div className="tsbTeamMembersWrapperTheme-7">
      <div
        className="team-ring"
        style={{
          "--total": members.length,
          "--radius": `${Math.min(20, members.length) * 0.7}rem`,
          "--avatar-size": `${Math.max(40, 100 - members.length)}px`
        }}
      >
        <div id="center">{isShowWaterMark && ReusableRichText &&
          <ReusableRichText value={waterMark} tagName='span' onChange={val => setAttributes({ options: updateData(options, val, "waterMark") })} />

        }
          {isShowWaterMark && !ReusableRichText && waterMark}
        </div>

        {members.map((member, index) => (
          <>
            <input
              className="tsbInputTpye"
              type="radio"
              name="avatar"
              id={`r${index}`}
              hidden
              ref={(el) => (radiosRef.current[index] = el)}
              onClick={handleRadioClick(index)}
              key={index}
            />
            <label
              className="avatar"
              htmlFor={`r${index}`}
              style={{ "--i": index }}
            >
              <img src={member?.photo?.url || 'https://templates.bplugins.com/wp-content/uploads/2025/11/team-section-member-2.png'} alt={member.name} />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath" style={{ zIndex: 999999999999999 }}>
                    {member.name} - {member.title}
                    {/* <span>{member.name}</span> */}
                    {/* {ReusableRichText?<ReusableRichText value={member?.name} />:member?.name} */}
                  </textPath>
                </text>
              </svg>
            </label>
          </>
        ))}
      </div>

      <svg width="0" height="0">
        <defs>
          <path
            id="circlePath"
            d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
          />
        </defs>
      </svg>
    </div>
  );
};

export default Theme7;
