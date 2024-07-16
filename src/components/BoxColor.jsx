function BoxColor ({color, value}) {
  const check = color === value
  return (
    <>
      <div style={{
            backgroundColor: check ? color : 'transparent',
            color: check ? 'black' : color,
            border: `1px solid ${color}`,
      }}>
        <p>{check ? `Yes, I'm a ${color} color` : `No, I'm not a ${value} color`}</p>
      </div>
    </> 
  )
}
export default BoxColor;  
