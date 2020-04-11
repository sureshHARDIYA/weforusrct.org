import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../../../components/ui/heading'
import RecentPostList from '../../blog/recent-post-list'
import BlogAd from '../../blog/blog-ad'
import PopularTags from '../../blog/popular-tags'
import {SidebarWrap, RecentPostListWrap, RecentWidgetBox, AdWidgetBox, TagWidgetBox} from './sidebar.style'

const Sidebar = ({widgetTitleStyle}) => {
    return(
        <SidebarWrap>
            <RecentWidgetBox>
                <Heading {...widgetTitleStyle}>Recent Posts</Heading>
                <RecentPostListWrap>
                    <RecentPostList/>
                </RecentPostListWrap>
            </RecentWidgetBox>
            <AdWidgetBox>
                <BlogAd/>
            </AdWidgetBox>
            <TagWidgetBox>
                <Heading {...widgetTitleStyle}>Popular Tags</Heading>
                <PopularTags/>
            </TagWidgetBox>
        </SidebarWrap>
    )
}

Sidebar.propTypes = {
    widgetTitleStyle: PropTypes.object
}

Sidebar.defaultProps = {
    widgetTitleStyle: {
        fontSize: '34px',
        fontweight: 500,
        mb: '27px'
    }
}

export default Sidebar;