import ShowTestplan from "./ShowTestplan";


const Display = ({testplans, searchedBaseline, searchedCreateTime, searchedName, productVers, baselineList, showDetails, setShowdetails}) => {

    let testplanList = testplans;
    testplanList = searchedBaseline? testplanList.filter((testplan) => {return testplan.baselineName === searchedBaseline}) : testplanList;
    testplanList = searchedCreateTime? testplanList.filter((testplan) => {return testplan.planCreatetime.split(" ")[0] === searchedCreateTime}) : testplanList;
    testplanList = searchedName? testplanList.filter((testplan) => {return testplan.planName.includes(searchedName)}) : testplanList;

    return (
        <div>
            {
                testplanList.map((testplan) => (
                <ShowTestplan 
                testplan={testplan} 
                showDetails={showDetails} 
                setShowdetails={setShowdetails}
                productVers={productVers}
                baselineList={baselineList}
                key={testplan.planId}/>))
            }
            
        </div>
    );
}
 
export default Display;