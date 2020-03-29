
import React from "react"
import logo from "../../content/assets/kompilator-large.png"
import smallLogo from "../../content/assets/header-logo.png"
import Img from "gatsby-image"
import { Link } from "gatsby"

const EpisodeCard = ({ episode }) => {

    var imageFluid = {};
    if (episode.frontmatter.image != null)
        imageFluid = episode.frontmatter.image.childImageSharp.fluid;

    return (

        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <Img className="h-80 w-full object-cover" fluid={imageFluid} alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <Link to={episode.fields.slug} href="" className="block">
                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            {episode.frontmatter.title}
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                            {episode.frontmatter.summary}
                        </p>
                        
                    </Link>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <Link to={episode.fields.slug}>
                            <img className="h-10 w-10 rounded-full" src={smallLogo} alt="" />
                        </Link>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm leading-5 font-medium text-gray-900">
                            Med Bartek Tatkowski
                        </p>
                        <div className="flex text-sm leading-5 text-gray-500">
                            <time datetime={episode.frontmatter.date}>
                                {episode.frontmatter.date}
                            </time>
                            <span className="mx-1">
                                &middot;
                            </span>
                            <span>
                                6 min read
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EpisodeCard
