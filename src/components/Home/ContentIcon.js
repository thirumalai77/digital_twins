import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faNetworkWired,
    faCogs,
    faBuilding,
    faWrench,
    faDraftingCompass
  } from '@fortawesome/free-solid-svg-icons';
function ContentIcon(){
    const TeamObj = [
        {
            icon:faNetworkWired,
            name:'Building',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        },
        {
            icon:faCogs,
            name:'Development',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        },
        {
            icon:faBuilding,
            name:'Design',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        },
        {
            icon:faWrench,
            name:'Maintanence',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        },
        {
            icon:faDraftingCompass,
            name:'Deployment',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        }
    ];
    return(
        <div className='container split-div'>
            <h2>Welcome to Digital Twin Technology</h2>
            <div className='row icon-container'>
            {TeamObj.map((team,index)=>{
                return(
                    <div className={index > 2 ? 'col-md-6 text-center':'col-md-4 text-center'}>
                        <div className="icon-div">
                             <FontAwesomeIcon icon={team.icon} className="content-social-icons" />
                                <div className="caption">
                                    <h4>{team.name}</h4>
                                    <p className={index > 2 ? 'padding-6em' : ''}>{team.description}</p>
                                </div>
                        </div>
                    </div>
              )}) }
            </div>
        </div>
    )
}

export default ContentIcon;