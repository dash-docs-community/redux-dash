var indexedFiles = [
    {
        "name": "docs/introduction/Motivation",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/introduction/CoreConcepts",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/introduction/ThreePrinciples",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/introduction/PriorArt",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/introduction/Ecosystem",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/introduction/Examples",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/basics/Actions",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/basics/Reducers",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/basics/Store",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/basics/DataFlow",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/basics/UsageWithReact",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/basics/ExampleTodoList",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/advanced/AsyncActions",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/advanced/AsyncFlow",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/advanced/Middleware",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/advanced/UsageWithReactRouter",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/advanced/ExampleRedditAPI",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/MigratingToRedux",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/UsingObjectSpreadOperator",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/ReducingBoilerplate",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/ServerRendering",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/WritingTests",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/ComputingDerivedData",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/ImplementingUndoHistory",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/IsolatingSubapps",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/StructuringReducers",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/UsingImmutableJS",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/reducers/PrerequisiteConcepts",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/reducers/BasicReducerStructure",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/reducers/SplittingReducerLogic",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/reducers/RefactoringReducersExample",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/reducers/UsingCombineReducers",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/reducers/BeyondCombineReducers",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/reducers/NormalizingStateShape",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/reducers/UpdatingNormalizedData",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/reducers/ReusingReducerLogic",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/reducers/ImmutableUpdatePatterns",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/recipes/reducers/InitializingState",
        "type": "Sample",
        "toc": "Section"
    },
    {
        "name": "docs/faq/General",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/faq/Reducers",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/faq/OrganizingState",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/faq/StoreSetup",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/faq/Actions",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/faq/ImmutableData",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/faq/CodeStructure",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/faq/Performance",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/faq/ReactRedux",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/faq/Miscellaneous",
        "type": "Guides",
        "toc": "Section"
    },
    {
        "name": "docs/api/createStore",
        "type": "Function",
        "toc": "Method"
    },
    {
        "name": "docs/api/Store",
        "type": "Function",
        "toc": "Method"
    },
    {
        "name": "docs/api/combineReducers",
        "type": "Function",
        "toc": "Method"
    },
    {
        "name": "docs/api/applyMiddleware",
        "type": "Function",
        "toc": "Method"
    },
    {
        "name": "docs/api/bindActionCreators",
        "type": "Function",
        "toc": "Method"
    },
    {
        "name": "docs/api/compose",
        "type": "Function",
        "toc": "Method"
    }
];

module.exports = indexedFiles;