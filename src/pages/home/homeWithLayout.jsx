import Layout from "../../components/layout";

const HomeWithLayout = () => {
    return (
        <Layout toShow={false} heading="Home page">
            <div>
                <h1>Home page</h1>
            </div>
        </Layout>
    )
}

export default HomeWithLayout;