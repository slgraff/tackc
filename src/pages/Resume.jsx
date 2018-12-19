import React, {Component} from 'react';
import resume from '../images/Chris_Tack_Résumé'
import { Document, Page } from 'react-pdf';

class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }
    
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }
    
    render() {
        const { pageNumber, numPages } = this.state;
    
        return (
        <div>
            <Document
            file={resume}
            onLoadSuccess={this.onDocumentLoadSuccess}
            >
            <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
        );
    }
}

export default Resume;