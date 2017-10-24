ClassicEditor
    .create(document.querySelector('#editor'), {
        plugins: ['Image'],
        toolbar: ['image', 'headings', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
        heading: {
            options: [
                { modelElement: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { modelElement: 'heading1', viewElement: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { modelElement: 'heading2', viewElement: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    })
    .catch(error => {
        console.log(error);
    });
ClassicEditor.build.plugins.map(plugin => plugin.pluginName);