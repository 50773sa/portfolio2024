
const StyledDots = () => {
    return (
        <div 
            style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexWrap: 'nowrap', 
                paddingTop: 70
            }}
        >
            <div className='dotWrapper'>
                <span className='smallDot'/>
                <span className='smallDot'/>
                <span className='smallDot'/>
                <span className='smallDot'/>
                <span className='smallDot'/>
            </div>
            
            <div className='dotWrapper'>
                <span className='largeDot'/>
                <span className='largeDot'/>
                <span className='largeDot'/>
                <span className='largeDot'/>
                <span className='largeDot'/>
            </div>

            <div className='dotWrapper'>
                <span className='smallDot'/>
                <span className='smallDot'/>
                <span className='smallDot'/>
                <span className='smallDot'/>
                <span className='smallDot'/>
            </div>
        </div>
    )
}

export default StyledDots