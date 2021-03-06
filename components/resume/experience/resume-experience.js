import StyledResumeExperience from "./resume-experience.styled";
import ResumeJobHistoryItem from "./job-history-item";

const ResumeExperience = () => <StyledResumeExperience>
    <h2>experience</h2>

    <ResumeJobHistoryItem
        company={"Alchemist Labs"}
        location={"Manchester"}
        start={"2019"}
        end={"Present"}
        position={"Managing Director & Principal Software Engineer"}
    />

    <ResumeJobHistoryItem
        company={"Ditto Music"}
        location={"Liverpool / Remote"}
        start={"2018"}
        end={"2019"}
        position={"Principal Software Engineer"}
    />

    <ResumeJobHistoryItem
        company={"Zuto"}
        location={"Manchester"}
        start={"2016"}
        end={"2018"}
        position={"Senior Software Engineer"}
    />

    <ResumeJobHistoryItem
        company={"SoNQ"}
        location={"Manchester"}
        start={"2015"}
        end={"2016"}
        position={"Senior Software Developer (Team Leader)"}
    />

    <ResumeJobHistoryItem
        company={"MediaCom North"}
        location={"Manchester"}
        start={"2012"}
        end={"2015"}
        position={"Senior Systems Developer"}
    />

    <ResumeJobHistoryItem
        company={"3-Si Limited"}
        location={"Newcastle-Under-Lyme"}
        start={"2010"}
        end={"2012"}
        position={"Software Developer"}
    />

    <ResumeJobHistoryItem
        company={"Shire Dental/Consulsoft"}
        location={"Middlewich"}
        start={"2006"}
        end={"2010"}
        position={"Software Developer"}
    />

    <ResumeJobHistoryItem
        company={"Huntleigh Renray"}
        location={"Winsford"}
        start={"2004"}
        end={"2005"}
        position={"Software Developer"}
    />

    <ResumeJobHistoryItem
        company={"Tissue Science Laboratories"}
        location={"Winsford"}
        start={"2001"}
        end={"2004"}
        position={"Software Developer"}
    />
</StyledResumeExperience>

export default ResumeExperience