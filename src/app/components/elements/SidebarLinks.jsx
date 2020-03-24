import React from 'react';
import tt from 'counterpart';

const SidebarLinks = ({ username }) => (
    <div className="c-sidebar__module">
        <div className="c-sidebar__header">
            <h3 className="c-sidebar__h3">{tt('g.links')}</h3>
        </div>
        <div className="c-sidebar__content">
            <ul className="c-sidebar__list">
                <li className="c-sidebar__list-item" key="feed">
                    <a className="c-sidebar__link" href={`/@${username}/feed`}>
                        {tt('g.my_feed')}
                    </a>
                </li>

                <li className="c-sidebar__list-item">
                    <a className="c-sidebar__link" href={'/@' + username}>
                        {tt('g.my_blog')}
                    </a>
                </li>

                <li className="c-sidebar__list-item">
                    <a
                        className="c-sidebar__link"
                        href={`/@${username}/transfers`}
                    >
                        {tt('g.my_wallet')}
                    </a>
                </li>

                <li className="c-sidebar__list-item">
                    <a
                        className="c-sidebar__link"
                        href="https://dex.steemleo.com"
                    >
                        SteemLeo DEX
                    </a>
                </li>

                <li className="c-sidebar__list-item">
                    <a
                        className="c-sidebar__link"
                        href="https://steemleo.com/faq"
                    >
                        FAQ
                    </a>
                </li>

                <li className="c-sidebar__list-item">
                    <a
                        className="c-sidebar__link"
                        href="https://steemleo.com/welcome"
                    >
                        Guide to SteemLeo
                    </a>
                </li>

                <li className="c-sidebar__list-item">
                    <a
                        className="c-sidebar__link"
                        href="https://www.steemleo.com/steemleo/@noleo4u/steemleo-tag-abuse-or-why-you-ll-start-seeing-flags-on-steemleo-content"
                    >
                        Community Guidelines
                    </a>
                </li>
            </ul>
        </div>
    </div>
);

export default SidebarLinks;
