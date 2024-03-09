# -*- coding: utf-8 -*-
{
    'name': "real_estate_ads",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'website': "https://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/property_views.xml',
        'views/property_type_view.xml',
        'views/property_tag_view.xml',

        # data files
        'data/property_type_view.xml',
        'data/estate.property.type.csv',
    ],
    # only loaded in demonstration mode
    'demo': [
    ],
    'sequence': -1,
    'installable': True,
    'application': True,
    'license': 'LGPL-3',
}
