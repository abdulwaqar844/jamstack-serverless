
exports.createPages = async function ({ actions}) {
    actions.createPage({
        path: "app",
        component: require.resolve(`./src/components/waqar.tsx`),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            name: "Abdul Waqar",
            Course:"AI",
            Quater:"2ND"
         },
    });
    console.log("End of Gatsby Node File");
}