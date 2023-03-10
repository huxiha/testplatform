import ShowFeature from './ShowFeature';

const Display = ({features, productVersList, searchedName, searchedVersion, showDetails, setShowdetails}) => {

    let featureList = features;
    featureList = searchedVersion? featureList.filter((feature) => {return feature.productVersion === searchedVersion}) : featureList;
    featureList = searchedName? featureList.filter((feature) => {return feature.featureName.includes(searchedName)}) : featureList;

    
    return (

        <div>
            {
                featureList.map((feature) => (
                    <ShowFeature 
                    feature={feature}
                    versions={productVersList}
                    showDetails={showDetails} 
                    setShowdetails={setShowdetails} 
                    key={feature.featureId}/>
                ))
                
            }
        </div>

       
     );
}
 
export default Display;