import { useState } from 'react';
import { Transfer } from 'antd';

const SelectFeature = ({baselineList, selectedBaseline, selectedFeatures ,setSelectedFeatures}) => {
    const baselist = baselineList.filter((baseline) => {return baseline.baselineName === selectedBaseline});
    
    const features = baselist.length > 0 ?  baselist[0].features : [];

    const selectData = features.map((feature) => ({
        key: feature,
        title: feature,
        description: feature,
      }));

    // const [targetKeys, setTargetKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);

    const onChange = (nextTargetKeys, direction, moveKeys) => {
        console.log('targetKeys:', nextTargetKeys);
        console.log('direction:', direction);
        console.log('moveKeys:', moveKeys);
        setSelectedFeatures(nextTargetKeys);
    };

    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        console.log('sourceSelectedKeys:', sourceSelectedKeys);
        console.log('targetSelectedKeys:', targetSelectedKeys);
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };


    return ( 
        <div className='w-full'>
     
        <Transfer
            dataSource={selectData}
            titles={['Source', 'Target']}
            targetKeys={selectedFeatures}
            selectedKeys={selectedKeys}
            onChange={onChange}
            onSelectChange={onSelectChange}
            render={(item) => item.title}
            listStyle={{width:"40%", height:"300px"}}
            operationStyle={{backgroundColor:"rgb(209 213 219)"}}
        />
 
    </div>
    );
}
 
export default SelectFeature;

