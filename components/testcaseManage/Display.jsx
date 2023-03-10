import ShowTestcase from './ShowTestcase';


const Display = ({testcases, searchedFeature, searchedBaseline, searchedName, showDetails, setShowdetails}) => {

    let testcaseList = testcases;
    testcaseList = searchedBaseline? testcaseList.filter((testcase) => {return testcase.baselineName === searchedBaseline}) : testcaseList;
    testcaseList = searchedFeature? testcaseList.filter((testcase) => {return testcase.featureName === searchedFeature}) : testcaseList;
    testcaseList = searchedName? testcaseList.filter((testcase) => {return testcase.caseName.includes(searchedName)}) : testcaseList;

    return (
        <div>
            {
                testcaseList.map((testcase) => (<ShowTestcase testcase={testcase} showDetails={showDetails} setShowdetails={setShowdetails} key={testcase.caseId}/>))
            }
            
        </div>
    );
}
 
export default Display;