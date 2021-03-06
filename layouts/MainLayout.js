import Head from 'next/head'

const MainLayout = ( {children} ) => {
    return (  
        <>
            <Head>
                <title>Alberts Febrian P</title>
                <meta name="theme-color" content="#6FB3B8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Alberts Febrian Prawira, Software Engineer" />
                <meta name="keywords" content="Alberts, Alberts Febrian, Alberts Prawira, Alberts Febrian Prawira" />
                <meta name="author" content="Alberts Febrian Prawira" />
                <link rel="icon" href="/icon.png" />
                <link rel="apple-touch-icon" href="/icon.png" />
                <link rel="manifest" href="/manifest.json"/>
            </Head>
            {children}
        </>
    );
}
 
export default MainLayout;