import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'


class HomeIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        return (
                <Layout>
                    <Helmet title="Gatsby Starter - Forty" meta={[
                            { name: 'description', content: 'Sample' },
                            { name: 'keywords', content: 'sample, something' },
                        ]}>
                    </Helmet>

                    <Banner />

                    <div id="main">
                        <About/>
                        <Skills/>
                        <Projects/>
                        
                    </div>

                </Layout>
        )
    }
}

export default HomeIndex