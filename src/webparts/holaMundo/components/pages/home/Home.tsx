import * as React from 'react';
import Layout from '../../Template/Layout'

export class HomePage extends React.Component<{}, {}> {
    render(): React.ReactElement{
        return <Layout description="HOME">                    
                        <p>este es el contenido de home</p>                        
                </Layout>
    }
}
