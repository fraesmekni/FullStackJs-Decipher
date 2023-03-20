import "./UserDashboard.css"
import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import SpecialButton from "../../Components/Button/button";
function UserDashboard(){
    const [showCreate, setShowCreate] = useState(false);

  const handleCreateClick = () => {
    setShowCreate(true);
  };

  const handleListClick = () => {
    setShowCreate(false);
  };

    return(

        <>
        <main style={{marginTop:"500px"}}className="mp_main">
  <div className="mp_sidebar">
    <div className="sidebar_logo">
      <img src={process.env.PUBLIC_URL + "/images/logo.png"}/>
    </div>

    <div className="sidebar_menu">
      <img onClick={handleListClick} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABEElEQVRIie2TMUqDQRCF34T8hdgELYVYpdAmnY05QTyCpLHzBJZioTdIo50B7YWkUSzVIs1/nghfCkdYAstOfkkh+mCbnXnvzczOSn8KwAgYbULYgHOg9nMBtCJcC4hXkq4knUha+HUlaSrp0swWOW4RwBYw9qrfgWPgCHjzuztgu6l4B5i40CtwkMR6wLPHHoHddcX3gCcXmALdQs4M2I+K94AXJz4AO4Uu75MuD0vi6XxvI/NdeacPYJBLHALzZBXbJfGE2054c2D4HWt5wqmka32tnyTJzD6jBiu5laQb4CxXTQ3UUfESLzSGnKGZ9Uvc0Hf/CdYyMLN+pOrGBk3w+w2yWxRZ1UjOxjv4RxFLW3QYbNPY/+0AAAAASUVORK5CYII=" />
      <img onClick={handleCreateClick} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAQElEQVRIiWNgGAXUBIcPHz5y+PDhI6ToYaKVY0YtGLWAeoARmUNqGscFbG1tbWBsmvuAJDCak0ctGKYWjAKCAAB8yhBUbF/pJwAAAABJRU5ErkJggg==" />
    </div>
    <div className="sidebar_logout">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACAklEQVRoge2ZP2tUQRTFfydEwfULJCpY5ANYqa1FlECwUhArIU0QrG1SaKG9RZZ0EWtBUEQQBC39A8GPYCEkRYqNkigYcizegMsSzMzbu3nN/JrLwpvzzr0zs+++eVCpVCqVMVCUkO0p4AZwAZhuIbEPfAVeSDqI8pWFbdl+5Rhe2s4ubMgM2F4EXgObQJ+mmqVMA/eAGWBR0psIb1nYXknVezSmzuOks5I7ZmqcGw5xIsU2lR/mz4jekUQl0Bk1ga6pCST2UtwN0sumzRPzMNaAbeB5kF42IQlI+gmsR2iV0noJ2T5r+6HtmUhDpbSaAdvngA/AHDAAnkSaKqF4BkbMfwGeRpsqoSiBZP49jfkNYEHSziSM5ZK9hGyf4V/lD2iqf992rsQ+sCppq9Tk/yjZA7dozEMzc8st7rdN8H4pSWAduA1cTL9Xge8F43eBZwXXZ5GdgKQd21eBt8Bl4DpwRdK3aFMlFG3itGEXaNb/eeCd7dlJGMul+G9U0gC4RpPEHM3e6IxWDzJJA9vzwE066H+Gad0LSfpBR/3PMCHttO3ZrvqiqPeBJeBBisdK9KnEySC9bOorZdfUBLomKoHfKZ4aU6eX4q/cAVGnEh9TvGu7R7vjldPAnRG948N2P+j7QL/kvmFfaFISl2ha7d5R1x7CHvBJ0udIT5VKpTJZ/gIArCTzj9YnhAAAAABJRU5ErkJggg==" />
    </div>
  </div>
  <div className="mp_library">
    <div className="library_search">
      <div className="searchbar">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABxElEQVRIidWUv27UQBCHv1m7ubsUpCf0EY9wXh/HKyBFugaq0PAEFKmQ8gKIhj9NhHSRDvEKR7y+gheAPtCeghRSIMs7FLeGBBzbR4IQv2bs0fzm2x2vF/53SV3SObcpIjtAoqpbIX0cRVFeluXMWnvyx4DFYnHXe78H9GsNImfAkyRJ5msDQvP9VR858t4fxnH8MTTeLopiIiKpiHhVfWytfdcZ4JzbBN4CfWPM0+Fw+LrO4Jy7DzwSka9FUdwbj8dfmgDmB2k1876IHF3WHMBaewA4Vd2I43inbQfm3LMF8N4ftpmAaYhJZ4Cq3gSoZt6kXq9X1Ww1FnJxB9pWXGm5XNYe70aAiHwOcbvNNBgMqppPnQHGGAdQFMWkzaSqkxBdZ0BZljMRORORNBzFWuV5/oDVxz0VkTdtgAuzzPN8DOyrqgEcMI2i6AOA9/52WHkS3p+PRqNXawEAnHN3RGRPVTcu8Zx676fGmIcAqvoyTdMXnQEA8/n8RviJEuBWSB8DOTCz1p44595X9U2QzsftV1VXxrnUgbX22bUBukKuBOgCuTKgDWLqLesp3LA/Vy3y7Tr6/qYsy3azLNv9K83/mb4D+s23Z1Qya+gAAAAASUVORK5CYII=" />
      </div>
    </div>
    <div className="library_album">
      <h3>Categories of products</h3>
      <div className="library_album_albums">
        <div className="library_album_covers">
          <img src="https://media.smallbiztrends.com/2021/05/beekeeping.png" alt="" className="album_cover" />
          <h5>Bee Keeping</h5>
          <p>Explore</p>
          <span></span>
        </div>
        <div className="library_album_covers">
          <img src="https://i.pinimg.com/736x/0a/ac/95/0aac95ac71eb2ae6f40dcb330c09d70b.jpg" alt="" className="album_cover" />
          <h5>Sculpture</h5>
          <p>Explore</p>
          <span></span>
        </div>
        <div className="library_album_covers">
          <img src="https://images.unsplash.com/photo-1605117012605-b68dedd4accc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" className="album_cover" />
          <h5>Pottery</h5>
          <p>Explore</p>
          <span></span>
        </div>
        <div className="library_album_covers">
          <img src="https://media.smallbiztrends.com/2021/05/beekeeping.png" alt="" className="album_cover" />
          <h5>Bee Keeping</h5>
          <p>Explore</p>
          <span></span>
        </div>
      </div>
    </div>
    <h3 className="library_trending_title">Your products</h3>
    <div
        id="create"
        className={`create ${showCreate ? "show" : "hide"} ${showCreate ? "library_trending" : ""}`}
      > 
          <input type="text" placeholder="Product name"></input>
          <input type="text" placeholder="Product name"></input>
          <input type="text" placeholder="Product name"></input>
          <input type="text" placeholder="Product name"></input>
          <input type="file" placeholder="Product name"></input> 
          <SpecialButton name="Create Product" ></SpecialButton>

</div>
    <div id="list"        className={`create ${!showCreate ? "show" : "hide"} ${!showCreate ? "library_trending" : ""}`}
>
      <table>
        <tr>
          <td>
            <p>1</p>
          </td>
          <td>
            <img src="https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" alt="" className="song_cover" />
          </td>
          <td className="song">
            <h4>Name</h4>
            <p>Description</p>
          </td>
          <td>
            <p>Categories</p>
          </td>
          <td>
            <p>price</p>
          </td>
          <td>
            <p>stockleft</p>
          </td>
          <td>
          <FontAwesomeIcon icon={faTrash} size="xl" />          </td>
          <td>
          <FontAwesomeIcon icon={faEdit} size="xl" />          </td>
        </tr>
        <tr>
          <td>
            <p>2</p>
          </td>
          <td>
            <img src="https://images.unsplash.com/photo-1457523054379-8d03ab9fc2aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className="song_cover" />
          </td>
          <td className="song">
            <h4>Out The Mud</h4>
            <p>Lil Baby</p>
          </td>
          <td>
            <p>Out The Mud</p>
          </td>
          <td>
            <p>149,976,180</p>
          </td>
          <td>
            <p>2:38</p>
          </td>
          <td>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABJklEQVRIie3UTytEURjH8efaSLGYjSiSYmFjKQtWQrLlJfAavBSKrYV3wSuw8QIYI6UsiCbKx+aOjjFz5w5XWfjVqdP58/2e89zbifhPv8E0DlDHK65xiJlkzSyO8rnXfO0+pnvB1/Goc16wg9283ykPWCs6eTd4K295K8oDplrcgcSxFxHDPSqY5a0oIznrY0PrBvWImOixuWyusiybahc0I2KwIkEzy7KhiM8lalQEj4iotzqp4LRCwdmXESz2+DvK5g0LHbU4qUBw3PVeGMXND+C3GCssHpbx/A34M5ZKfSGsotkH/AWbpeCJZFv3N6cdvtUXPJGsKH6fnrDxLXgiWcBdB/h96ZqXkMzhMoE3MF8JPJGM4xwXmKwUnkhqqP0K/M/mHVFev9DVPV/MAAAAAElFTkSuQmCC" />
          </td>
        </tr>
        <tr>
          <td>
            <p>3</p>
          </td>
          <td>
            <img src="https://images.unsplash.com/photo-1520600661691-801f48869ee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className="song_cover" />
          </td>
          <td className="song">
            <h4>Elevate</h4>
            <p>Drake</p>
          </td>
          <td>
            <p>Scorpion</p>
          </td>
          <td>
            <p>149,976,180</p>
          </td>
          <td>
            <p>3:05</p>
          </td>
          <td>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABJklEQVRIie3UTytEURjH8efaSLGYjSiSYmFjKQtWQrLlJfAavBSKrYV3wSuw8QIYI6UsiCbKx+aOjjFz5w5XWfjVqdP58/2e89zbifhPv8E0DlDHK65xiJlkzSyO8rnXfO0+pnvB1/Goc16wg9283ykPWCs6eTd4K295K8oDplrcgcSxFxHDPSqY5a0oIznrY0PrBvWImOixuWyusiybahc0I2KwIkEzy7KhiM8lalQEj4iotzqp4LRCwdmXESz2+DvK5g0LHbU4qUBw3PVeGMXND+C3GCssHpbx/A34M5ZKfSGsotkH/AWbpeCJZFv3N6cdvtUXPJGsKH6fnrDxLXgiWcBdB/h96ZqXkMzhMoE3MF8JPJGM4xwXmKwUnkhqqP0K/M/mHVFev9DVPV/MAAAAAElFTkSuQmCC" />
          </td>
        </tr>
        <tr>
          <td>
            <p>4</p>
          </td>
          <td>
            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className="song_cover" />
          </td>
          <td className="song">
            <h4>Popstar</h4>
            <p>DJ Khaled</p>
          </td>
          <td>
            <p>Popstar</p>
          </td>
          <td>
            <p>149,976,180</p>
          </td>
          <td>
            <p>3:20</p>
          </td>
          <td>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACr0lEQVRIie2UO2wcVRSGv//OWMJFkEKEkREF9BSgiNfe2bG2IV0oSAUYiQIkShLiApkIohTIIi6oSAMoMiUu3CNL88KGJgWPBggFCGQRI7mIvfbOPRTZDYt31psgCgr+anTP/zjn3NGF/zEBOnyQZdksMO+cexo4YWbbkjYPDg5WOp3OzwAbGxsP7e/vz0t6UtJ9wI0QwhfASpqmv44NyPP8KeASMN3QTC+EsBxFEWZ2FogbODfNbDFN0y9HArIsm5V0FZg2s8rMPg4hXI/j+EEzOyPpNGADnXNubW9v7zPn3C/OuUeiKHrFzFrAzV6v93Kn0/mNQ13MD8zTNF0YOv8RWCqK4nszewNA0rL3fnWI8x2wUBTFkpm1pqamXgLeB3ADRn/nxHH8UcPoJEmy6py74py7kiTJahMnhPAJgJk9Mzi7PYGZHQfodrs/NYkBvPcr42r95q7XdQ1w/HbjQ/Wt/iSzR5kchbquZwEkbY0ESLoGEEXRs/80wMxO9T+vjQQAa33SmSzL7r9b87IsZyQ9D1gIYW0kIEmSb4B1YFrSopm5Bp9xnbu6rt8G7gE+T9P026YJAJbN7AZwMs/zc3dorqqq3pT0OLAdRdEHw/W/BbTb7T8kXZDUlfRclmWvTgooy/K1EMJpSV0zW2y1WtvD9ZG3qC96IoSwBEyZ2aftdvtDSTbMMTMVRfE68AK3npG35ubmqsNejXv23n8l6SLQk/RiVVXnh+/EzFxVVecH5nVdv9tkPnaCAfI8Pwm8x62Lz3d2dt6ZmZkJu7u7F4AOsCdpMUmSjXEeRwYAlGX5aH9d9/LX//0YsOOcW/Def32UfmIAwPr6+sNxHF8GHgCQ9Lukc977HyZp7ygAYHNz80S3270MxFEUnfXeb00U3S2KojhWFMWxf934P40/Ab3tHTo8eDDvAAAAAElFTkSuQmCC" />
          </td>
        </tr>
        <tr>
          <td>
            <p>5</p>
          </td>
          <td>
            <img src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className="song_cover" />
          </td>
          <td className="song">
            <h4>Can't Stop Me</h4>
            <p>Avicii</p>
          </td>
          <td>
            <p>Can't Stop Me</p>
          </td>
          <td>
            <p>149,976,180</p>
          </td>
          <td>
            <p>5:20</p>
          </td>
          <td>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACr0lEQVRIie2UO2wcVRSGv//OWMJFkEKEkREF9BSgiNfe2bG2IV0oSAUYiQIkShLiApkIohTIIi6oSAMoMiUu3CNL88KGJgWPBggFCGQRI7mIvfbOPRTZDYt31psgCgr+anTP/zjn3NGF/zEBOnyQZdksMO+cexo4YWbbkjYPDg5WOp3OzwAbGxsP7e/vz0t6UtJ9wI0QwhfASpqmv44NyPP8KeASMN3QTC+EsBxFEWZ2FogbODfNbDFN0y9HArIsm5V0FZg2s8rMPg4hXI/j+EEzOyPpNGADnXNubW9v7zPn3C/OuUeiKHrFzFrAzV6v93Kn0/mNQ13MD8zTNF0YOv8RWCqK4nszewNA0rL3fnWI8x2wUBTFkpm1pqamXgLeB3ADRn/nxHH8UcPoJEmy6py74py7kiTJahMnhPAJgJk9Mzi7PYGZHQfodrs/NYkBvPcr42r95q7XdQ1w/HbjQ/Wt/iSzR5kchbquZwEkbY0ESLoGEEXRs/80wMxO9T+vjQQAa33SmSzL7r9b87IsZyQ9D1gIYW0kIEmSb4B1YFrSopm5Bp9xnbu6rt8G7gE+T9P026YJAJbN7AZwMs/zc3dorqqq3pT0OLAdRdEHw/W/BbTb7T8kXZDUlfRclmWvTgooy/K1EMJpSV0zW2y1WtvD9ZG3qC96IoSwBEyZ2aftdvtDSTbMMTMVRfE68AK3npG35ubmqsNejXv23n8l6SLQk/RiVVXnh+/EzFxVVecH5nVdv9tkPnaCAfI8Pwm8x62Lz3d2dt6ZmZkJu7u7F4AOsCdpMUmSjXEeRwYAlGX5aH9d9/LX//0YsOOcW/Def32UfmIAwPr6+sNxHF8GHgCQ9Lukc977HyZp7ygAYHNz80S3270MxFEUnfXeb00U3S2KojhWFMWxf934P40/Ab3tHTo8eDDvAAAAAElFTkSuQmCC" />
          </td>
        </tr>
        <tr>
          <td>
            <p>6</p>
          </td>
          <td>
            <img src="https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className="song_cover" />
          </td>
          <td className="song">
            <h4>Drive</h4>
            <p>Black Coffee</p>
          </td>
          <td>
            <p>Drive</p>
          </td>
          <td>
            <p>149,976,180</p>
          </td>
          <td>
            <p>4:44</p>
          </td>
          <td>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACr0lEQVRIie2UO2wcVRSGv//OWMJFkEKEkREF9BSgiNfe2bG2IV0oSAUYiQIkShLiApkIohTIIi6oSAMoMiUu3CNL88KGJgWPBggFCGQRI7mIvfbOPRTZDYt31psgCgr+anTP/zjn3NGF/zEBOnyQZdksMO+cexo4YWbbkjYPDg5WOp3OzwAbGxsP7e/vz0t6UtJ9wI0QwhfASpqmv44NyPP8KeASMN3QTC+EsBxFEWZ2FogbODfNbDFN0y9HArIsm5V0FZg2s8rMPg4hXI/j+EEzOyPpNGADnXNubW9v7zPn3C/OuUeiKHrFzFrAzV6v93Kn0/mNQ13MD8zTNF0YOv8RWCqK4nszewNA0rL3fnWI8x2wUBTFkpm1pqamXgLeB3ADRn/nxHH8UcPoJEmy6py74py7kiTJahMnhPAJgJk9Mzi7PYGZHQfodrs/NYkBvPcr42r95q7XdQ1w/HbjQ/Wt/iSzR5kchbquZwEkbY0ESLoGEEXRs/80wMxO9T+vjQQAa33SmSzL7r9b87IsZyQ9D1gIYW0kIEmSb4B1YFrSopm5Bp9xnbu6rt8G7gE+T9P026YJAJbN7AZwMs/zc3dorqqq3pT0OLAdRdEHw/W/BbTb7T8kXZDUlfRclmWvTgooy/K1EMJpSV0zW2y1WtvD9ZG3qC96IoSwBEyZ2aftdvtDSTbMMTMVRfE68AK3npG35ubmqsNejXv23n8l6SLQk/RiVVXnh+/EzFxVVecH5nVdv9tkPnaCAfI8Pwm8x62Lz3d2dt6ZmZkJu7u7F4AOsCdpMUmSjXEeRwYAlGX5aH9d9/LX//0YsOOcW/Def32UfmIAwPr6+sNxHF8GHgCQ9Lukc977HyZp7ygAYHNz80S3270MxFEUnfXeb00U3S2KojhWFMWxf934P40/Ab3tHTo8eDDvAAAAAElFTkSuQmCC" />
          </td>
        </tr>
        <tr>
          <td>
            <p>7</p>
          </td>
          <td>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className="song_cover" />
          </td>
          <td className="song">
            <h4>Sicko Mode</h4>
            <p>Travis Scott</p>
          </td>
          <td>
            <p>Astroworld</p>
          </td>
          <td>
            <p>149,976,180</p>
          </td>
          <td>
            <p>5:13</p>
          </td>
          <td>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACr0lEQVRIie2UO2wcVRSGv//OWMJFkEKEkREF9BSgiNfe2bG2IV0oSAUYiQIkShLiApkIohTIIi6oSAMoMiUu3CNL88KGJgWPBggFCGQRI7mIvfbOPRTZDYt31psgCgr+anTP/zjn3NGF/zEBOnyQZdksMO+cexo4YWbbkjYPDg5WOp3OzwAbGxsP7e/vz0t6UtJ9wI0QwhfASpqmv44NyPP8KeASMN3QTC+EsBxFEWZ2FogbODfNbDFN0y9HArIsm5V0FZg2s8rMPg4hXI/j+EEzOyPpNGADnXNubW9v7zPn3C/OuUeiKHrFzFrAzV6v93Kn0/mNQ13MD8zTNF0YOv8RWCqK4nszewNA0rL3fnWI8x2wUBTFkpm1pqamXgLeB3ADRn/nxHH8UcPoJEmy6py74py7kiTJahMnhPAJgJk9Mzi7PYGZHQfodrs/NYkBvPcr42r95q7XdQ1w/HbjQ/Wt/iSzR5kchbquZwEkbY0ESLoGEEXRs/80wMxO9T+vjQQAa33SmSzL7r9b87IsZyQ9D1gIYW0kIEmSb4B1YFrSopm5Bp9xnbu6rt8G7gE+T9P026YJAJbN7AZwMs/zc3dorqqq3pT0OLAdRdEHw/W/BbTb7T8kXZDUlfRclmWvTgooy/K1EMJpSV0zW2y1WtvD9ZG3qC96IoSwBEyZ2aftdvtDSTbMMTMVRfE68AK3npG35ubmqsNejXv23n8l6SLQk/RiVVXnh+/EzFxVVecH5nVdv9tkPnaCAfI8Pwm8x62Lz3d2dt6ZmZkJu7u7F4AOsCdpMUmSjXEeRwYAlGX5aH9d9/LX//0YsOOcW/Def32UfmIAwPr6+sNxHF8GHgCQ9Lukc977HyZp7ygAYHNz80S3270MxFEUnfXeb00U3S2KojhWFMWxf934P40/Ab3tHTo8eDDvAAAAAElFTkSuQmCC" />
          </td>
        </tr>
      </table>
    </div>
  </div>
  <div className="mp_playlist">
    <h3>Tips on how to sell your products better</h3>
    <div className="mp_playlist_content">
      <div className="mp_playlist_song">
<div >
<img src={process.env.PUBLIC_URL + "/images/logo.png"}/>
<p>Learn these tips so that you can sell your product as fast as you can!</p>
<ol>
    <li>Focus on one craft</li>
    <li>Be patient</li>
    <li>Take courses on marketing</li>
    <li>Share on social media</li>
    <li>el section hedhi bch twali khir matkhafouch</li>




</ol>
</div>      
      
        
          </div>
        </div>
        
      </div>
      <hr />
    
</main>
        </>
    )
}
export default UserDashboard;