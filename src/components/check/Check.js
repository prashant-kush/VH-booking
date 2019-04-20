import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import "./check.css";
class Check extends React.Component
{
	constructor(props) {
	    super(props);
		this.myListener=this.onResize.bind(this);
	    this.handleDayChangeArrival = this.handleDayChangeArrival.bind(this);
	    this.handleDayChangeDeparture = this.handleDayChangeDeparture.bind(this);
	    this.state = {
	      width:"",
	      selectedDayArrival: undefined,
	      selectedDayDeparture: undefined,
	    };
  }
  	onResize=()=>
  	{
		const w=window.innerWidth;
		this.setState(Object.assign(this.state,{width:w}));
		
	}
	componentDidMount(){
		this.onResize();
		window.addEventListener("resize",this.myListener);
	}
	componentWillUnmount(){
		window.removeEventListener("resize",this.myListener);
		
	}
  	handleDayChangeArrival(day) {
    	this.setState({ selectedDayArrival: day });
  	}
  	handleDayChangeDeparture(day) {
    	this.setState({ selectedDayDeparture: day });
 	 }
	render()
	{
		const { selectedDayArrival } = this.state;
		const { selectedDayDeparture } = this.state;
		
			
				{if(this.state.width>=1000)
			        	return(
	        						<div class="check">
									<p id="heading">Welcome to ABV-IIITM</p>
									<p id="heading2">Visitor Hostel Registration</p>
									<div className="check-form">
									  	<div className="arrival">
								        {selectedDayArrival && <p style={{margin:"0px"}}>Arrival Date: {selectedDayArrival.toLocaleDateString()}</p>}
								        {!selectedDayArrival && <p style={{margin:"0px"}}>Arrival Date</p>}

								        <DayPickerInput onDayChange={this.handleDayChangeArrival} placeholder="YYYY-MM-DD" inputProps={{style:{border:"none",fontSize:"25px",width:"300px",outline:"none"}}} id="day-picker"/>
								        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
												 viewBox="0 0 32 32" xmlSpace="preserve" width="40" height="40" style={{marginTop:"10px"}} className="calender-svg">
											<g>
												<g id="calendar_1_">
													<path style={{fill:"#90723A"}} d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1
														c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667
														C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667
														C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1
														s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z"/>
													<rect x="7" y="12" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="7" y="17" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="7" y="22" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="14" y="22" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="14" y="17" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="14" y="12" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="21" y="22" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="21" y="17" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="21" y="12" style={{fill:"#90723A"}} width="4" height="3"/>
												</g>
											</g>	
										</svg>		
								      </div>
								      <div className="departure">
								        {selectedDayDeparture && <p style={{margin:"0px"}}>Departure Date: {selectedDayDeparture.toLocaleDateString()}</p>}
								        {!selectedDayDeparture && <p style={{margin:"0px"}}>Departure Date</p>}
								        <DayPickerInput onDayChange={this.handleDayChangeDeparture} placeholder="YYYY-MM-DD" inputProps={{style:{border:"none",fontSize:"25px",width:"300px",outline:"none"}}} />
								        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
												 viewBox="0 0 32 32" xmlSpace="preserve" width="40" height="40" style={{marginTop:"10px"}}>
											<g>
												<g id="calendar_1_">
													<path style={{fill:"#90723A"}} d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1
														c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667
														C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667
														C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1
														s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z"/>
													<rect x="7" y="12" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="7" y="17" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="7" y="22" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="14" y="22" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="14" y="17" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="14" y="12" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="21" y="22" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="21" y="17" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="21" y="12" style={{fill:"#90723A"}} width="4" height="3"/>
												</g>
											</g>	
										</svg>	
								      </div>
					         		 </div>  
								</div>
						      
			      				);
				else
					return(
							<div class="check">
									<p id="heading">Welcome to ABV-IIITM</p>
									<p id="heading2">Visitor Hostel Registration</p>
									<div className="check-form">
								<div className="arrival">
								        {selectedDayArrival && <p style={{margin:"0px"}}>Arrival Date: {selectedDayArrival.toLocaleDateString()}</p>}
								        {!selectedDayArrival && <p style={{margin:"0px"}}>Arrival Date</p>}

								        <DayPickerInput onDayChange={this.handleDayChangeArrival} placeholder="YYYY-MM-DD" inputProps={{style:{border:"none",fontSize:"20px",width:"150px",outline:"none"}}} id="day-picker"/>
								        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
												 viewBox="0 0 32 32" xmlSpace="preserve" style={{marginTop:"10px"}} className="calender-svg">
											<g>
												<g id="calendar_1_">
													<path style={{fill:"#90723A"}} d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1
														c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667
														C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667
														C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1
														s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z"/>
													<rect x="7" y="12" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="7" y="17" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="7" y="22" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="14" y="22" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="14" y="17" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="14" y="12" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="21" y="22" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="21" y="17" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="21" y="12" style={{fill:"#90723A"}} width="4" height="3"/>
												</g>
											</g>	
										</svg>		
								      </div>
								      <div className="departure">
								        {selectedDayDeparture && <p style={{margin:"0px"}}>Departure Date: {selectedDayDeparture.toLocaleDateString()}</p>}
								        {!selectedDayDeparture && <p style={{margin:"0px"}}>Departure Date</p>}
								        <DayPickerInput onDayChange={this.handleDayChangeDeparture} placeholder="YYYY-MM-DD" inputProps={{style:{border:"none",fontSize:"20px",width:"150px",outline:"none"}}} />
								        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
												 viewBox="0 0 32 32" xmlSpace="preserve" style={{marginTop:"10px"}} className="calender-svg">
											<g>
												<g id="calendar_1_">
													<path style={{fill:"#90723A"}} d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1
														c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667
														C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667
														C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1
														s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z"/>
													<rect x="7" y="12" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="7" y="17" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="7" y="22" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="14" y="22" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="14" y="17" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="14" y="12" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="21" y="22" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="21" y="17" style={{fill:"#90723A"}} width="4" height="3"/>
													<rect x="21" y="12" style={{fill:"#90723A"}} width="4" height="3"/>
												</g>
											</g>	
										</svg>	
								      </div>	
							</div>
						</div>);
				}
				
				
			
		

	}
}
export default Check;