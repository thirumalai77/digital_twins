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
            name:'BIM Model',
            description:"BIM was introduced over a decade ago mainly to distinguish the information-rich architectural 3D modeling from the traditional 2D drawing"
        },
        {
            icon:faCogs,
            name:'Shop Drawings',
            description:"Shop drawings provide the details needed by a fabricator during fabrication, assembly, installation and erection, such as the specified material, weld types and connections."
        },
        {
            icon:faBuilding,
            name:'Design & Development',
            description:"In design development, the schematic plans and elevations are reviewed, revised and expanded to incorporate all the details and specifications required for construction"
        },
        {
            icon:faWrench,
            name:'Point Cloud to BIM',
            description:"A 3D laser scanning device is used to capture the existing conditions, the scanned data is in the form of “Points” when millions of such points are combined together that formulates as a Point Cloud Scan."
        },
        {
            icon:faDraftingCompass,
            name:'As-Build & Facilities Management',
            description:"A digital twin allows a facilities manager to identify different elements of a building, isolate them for their information, and understand the needs of both that specific element and its relationship to peripheral systems."
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