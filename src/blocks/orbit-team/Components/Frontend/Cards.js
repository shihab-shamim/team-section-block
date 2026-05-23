export default function GalaxyTeam({
  attributes,
  RichTextComponent,
  setAttributes,
}) {
  const { orbitTeam = {}, teamMembers = [], options = {} } = attributes || {};
  const { tag, title, subTitle, brankMark, brankTitle, brankEst } = orbitTeam;

  return (
    <section className="tsbo_galaxy-section" aria-labelledby="team-title">
      {options.showTag && !RichTextComponent && (
        <span
          className="tsbo_eyebrow"
          dangerouslySetInnerHTML={{ __html: tag }}
        ></span>
      )}
      {options.showTag && RichTextComponent && (
        <RichTextComponent
          tagName="span"
          val={tag}
          onChange={(val) =>
            setAttributes({ orbitTeam: { ...orbitTeam, tag: val } })
          }
          className="tsbo_eyebrow"
          placeholder="Tag"
        />
      )}
      {options.showTitle && !RichTextComponent && (
        <h2
          className="tsbo_title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
      )}
      {options.showTitle && RichTextComponent && (
        <RichTextComponent
          tagName="h2"
          val={title}
          onChange={(val) =>
            setAttributes({ orbitTeam: { ...orbitTeam, title: val } })
          }
          className="tsbo_title"
          placeholder="Title"
        />
      )}
      {options.showSubTitle && !RichTextComponent && (
        <p
          className="tsbo_lede"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        ></p>
      )}
      {options.showSubTitle && RichTextComponent && (
        <RichTextComponent
          tagName="p"
          val={subTitle}
          onChange={(val) =>
            setAttributes({ orbitTeam: { ...orbitTeam, subTitle: val } })
          }
          className="tsbo_lede"
          placeholder="Sub Title"
        />
      )}

      <div
        className="tsbo_galaxy"
        role="group"
        aria-label="Team members orbiting around the brand"
      >
        <div className="tsbo_galaxy__rings" aria-hidden="true">
          {/* teamMembers */}
          {/* <span className="tsbo_halo"></span>
          <span className="tsbo_ring--1"></span>
          <span className="tsbo_ring--2"></span>
          <span className="tsbo_ring--3"></span> */}
          {teamMembers?.map((member, i) => (
            <span key={i} className={`tsbo_ring--${i + 1} tsbo_ring`}></span>
          ))}
        </div>

        <div
          className="tsbo_core"
          aria-hidden="true"
          style={
            options?.uploadImage
              ? {
                  background: `url(${options?.image}) center/cover no-repeat`,
                }
              : {}
          }
        >
          {!options?.uploadImage && (
            <div>
              {!RichTextComponent && (
                <div
                  className="tsbo_core__mark"
                  dangerouslySetInnerHTML={{ __html: brankMark }}
                ></div>
              )}
              {RichTextComponent && (
                <RichTextComponent
                  tagName="div"
                  val={brankMark}
                  onChange={(val) =>
                    setAttributes({
                      orbitTeam: { ...orbitTeam, brankMark: val },
                    })
                  }
                  className="tsbo_core__mark"
                  placeholder="Mark"
                />
              )}
              {!RichTextComponent && (
                <div
                  className="tsbo_core__title"
                  dangerouslySetInnerHTML={{ __html: brankTitle }}
                ></div>
              )}
              {RichTextComponent && (
                <RichTextComponent
                  tagName="div"
                  val={brankTitle}
                  onChange={(val) =>
                    setAttributes({
                      orbitTeam: { ...orbitTeam, brankTitle: val },
                    })
                  }
                  className="tsbo_core__title"
                  placeholder="Title"
                />
              )}
              {!RichTextComponent && (
                <div
                  className="tsbo_core__sub"
                  dangerouslySetInnerHTML={{ __html: brankEst }}
                ></div>
              )}
              {RichTextComponent && (
                <RichTextComponent
                  tagName="div"
                  val={brankEst}
                  onChange={(val) =>
                    setAttributes({
                      orbitTeam: { ...orbitTeam, brankEst: val },
                    })
                  }
                  className="tsbo_core__sub"
                  placeholder="Est."
                />
              )}
            </div>
          )}
        </div>

        {teamMembers?.map((orbitObj, i) => {
          const orbitKey = Object.keys(orbitObj)[0];
          const members = orbitObj[orbitKey] || [];

          return (
            <ul
              key={`${i}-${JSON.stringify(members)}`}
              className={`tsbo_orbit tsbo_orbit--${i + 1}`}
              style={{ "--total": members.length }}
            >
              {members.map((member, j) => (
                <li className="tsbo_star" key={j} style={{ "--seat": j }}>
                  <div className="tsbo_star__upright">
                    <div className="tsbo_star__inner">
                      <a
                        href={member.link || "#"}
                        aria-label={member.name}
                        target={options.linkOpen ? "_blank" : "_self"}
                        rel="noreferrer"
                      >
                        <img src={member.img} alt="" />
                        <span className="tsbo_name">{member.name}</span>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          );
        })}
      </div>
    </section>
  );
}
