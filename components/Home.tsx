import { NextPage } from "next"
import ForBusinesses from "./_ForBusinesses"
import ForDevelopers from "./_ForDevelopers"
import ForTeams from "./_ForTeams"
import Hero from "./_Hero"
import Hire from "./_Hire"
import Jobs from "./_Jobs"
import Questions from "./_Questions"

const Home: NextPage = () => {
    return (
        <div>
            <Hero />
            <ForDevelopers />
            <ForBusinesses />
            <ForTeams />
            <Questions />
            <Hire />
            <Jobs />
        </div>
    )
}

export default Home