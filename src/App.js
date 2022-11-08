import React from 'react';
import './App.css';
import CableIcon from '@mui/icons-material/Cable';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import LaptopIcon from '@mui/icons-material/Laptop';
import {
	Grid,
	Paper,
	Box,
	BottomNavigation,
	BottomNavigationAction,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
	const [value, setValue] = React.useState(0);
	const [progress, setProgress] = React.useState(0);
	const graphicColor = '#33ff33';
	const bgColor = '#282828';
	return (
		<>
			<Grid container>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Paper>1</Paper>
				</Grid>
				<Grid item xs={4} sm={4} md={4} lg={4}>
					<Paper>2</Paper>
				</Grid>
				<Grid item xs={4} sm={4} md={4} lg={4}>
					<Paper>3</Paper>
				</Grid>
				<Grid item xs={4} sm={4} md={4} lg={4}>
					<Paper>4</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<CircularProgress
							sx={{
								color: `${graphicColor}`,
								backgroundColor: '#393939',
								borderRadius: '50%',
								outline: `2px solid ${graphicColor}`,
								position: 'fixed',
								bottom: '12vh',
								left: '35vw',
								transform: 'translateX(-50%)',
							}}
							// make programmatic media query for the main earn button
							size={'30vw'}
							thickness={2}
							value={progress}
							variant='determinate'
							onClick={() =>
								setProgress((prevProgress) =>
									prevProgress >= 100 ? 0 : prevProgress + 0.1
								)
							}
						/>
					</Grid>
					<Box sx={{ width: '100vw' }}>
						<BottomNavigation
							showLabels
							value={value}
							onChange={(event, newValue) => {
								setValue(newValue);
								console.log(newValue);
							}}
							sx={{
								position: 'fixed',
								bottom: 0,
								left: 0,
								right: 0,
								backgroundColor: `${bgColor}`,
								borderTop: `3px solid ${graphicColor}`,
							}}
						>
							<BottomNavigationAction
								sx={{
									color: 'white',
									fontFamily: 'Roboto',
									borderRight: `2px solid ${graphicColor}`,
									backgroundColor: `${bgColor}`,
									'&.Mui-selected': {
										color: `${graphicColor}`,
									},
								}}
								label='Connect'
								icon={<CableIcon />}
							/>
							<BottomNavigationAction
								sx={{
									color: 'white',
									fontFamily: 'Roboto',
									backgroundColor: `${bgColor}`,
									'&.Mui-selected': {
										color: `${graphicColor}`,
									},
								}}
								label='Earn'
								icon={<BlurOnIcon />}
							/>
							<BottomNavigationAction
								sx={{
									color: 'white',
									borderLeft: `2px solid ${graphicColor}`,
									fontFamily: 'Roboto',
									backgroundColor: `${bgColor}`,
									'&.Mui-selected': {
										color: `${graphicColor}`,
									},
								}}
								label='Hardware'
								icon={<LaptopIcon />}
							/>
						</BottomNavigation>
					</Box>
				</Grid>
			</Grid>
		</>
	);
}

export default App;
