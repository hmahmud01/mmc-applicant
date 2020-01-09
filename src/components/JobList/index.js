import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
class JobList extends React.Component{
    render(){
        return(
            <div class="main-panel" id="main-panel">
                <Header />
                <div class="panel-header panel-header-sm">
                </div>
                <div class="content">
                    <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                        <div class="card-header">
                            <h4 class="card-title"> Applied Job List</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                            <table class="table">
                                <thead class=" text-primary">
                                <th>Post</th>
                                <th>Company</th>
                                <th>Date Applied</th>
                                <th class="text-right">URL</th>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>C.T.O</td>
                                    <td>GP</td>
                                    <td>11/05/2019</td>
                                    <td class="text-right">
                                    <a href="">URL</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>C.T.O</td>
                                    <td>GP</td>
                                    <td>11/05/2019</td>
                                    <td class="text-right">
                                    <a href="">URL</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>C.T.O</td>
                                    <td>GP</td>
                                    <td>11/05/2019</td>
                                    <td class="text-right">
                                    <a href="">URL</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>C.T.O</td>
                                    <td>GP</td>
                                    <td>11/05/2019</td>
                                    <td class="text-right">
                                    <a href="">URL</a>
                                    </td>
                                </tr>                      
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default JobList;