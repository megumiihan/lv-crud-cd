import ProductIndex from './components/index.vue';
import ProductCreate from './components/create.vue';
import ProductEdit from './components/edit.vue';

export const routes = [{
        path: '/products',
        component: ProductIndex,
        name: "ProductIndex"
    },
    {
        path: '/products/create',
        component: ProductCreate,
        name: "ProductCreate"
    },
    {
        path: '/products/edit/:id',
        component: ProductEdit,
        name: "ProductEdit"
    }
];