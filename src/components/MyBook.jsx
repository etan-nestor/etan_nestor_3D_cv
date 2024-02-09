import HTMLFlipBook from 'react-pageflip';
import Page from './Page'
import Cover from './pages/MyCover/Cover'
import ImgCover from '../assets/cover.jpg'
import FirstPage from './pages/Hero/FirstPage';
import MySkills from './pages/Skills/MySkills';
import Services from './pages/MyServices/Services';
import About from './pages/Abouts/About';
import Projects from './pages/MyProjects/Projects';

import Project1Img from '../assets/Projects/projet1.png'

const ProjectData1= [
    {
        name:"Design Management",
        description:"lorem upsum testxt aniat prosta videlitima pepto nuk",
        image:Project1Img,
        previewLink:"https://app.netlify.com/sites/design-management"
    },
    {
        name:"Design Management",
        description:"lorem upsum testxt aniat prosta videlitima pepto nuk",
        image:Project1Img,
        previewLink:"https://app.netlify.com/sites/design-management"
    },
]
const ProjectData2= [
    {
        name:"Design Management",
        description:"lorem upsum testxt aniat prosta videlitima pepto nuk",
        image:Project1Img,
        previewLink:"https://app.netlify.com/sites/design-management"
    },
    {
        name:"Design Management",
        description:"lorem upsum testxt aniat prosta videlitima pepto nuk",
        image:Project1Img,
        previewLink:"https://app.netlify.com/sites/design-management"
    },
]

function MyBook(props) {
    return (
        <HTMLFlipBook width={600} height={700} showCover="true">
            <Page number={1}>
                <Cover coverImg={ImgCover} title="Nestor's Portfolio" />
            </Page>
            <Page number={2}>
                <FirstPage />
            </Page>
            <Page number={3}>
                <MySkills />
            </Page>
            <Page number={4}>
                <Services />
            </Page>
            <Page number={5}>
                <About />
            </Page>
            <Page number={6}>
                <Projects ProjectData={ProjectData1} />
            </Page>
            <Page number={7}>
                <Projects ProjectData={ProjectData2} />
            </Page>
            <Page number={7}>
                <Cover coverImg={ImgCover} title="Thank You !" />
            </Page>
        </HTMLFlipBook>
    );
}

export default MyBook;