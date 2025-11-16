<?php
// Plugin Name: My Block 
// Plugin URI: https://woo-test/
// Description: Simple Block
// Author: Me
// Author URI: https://woo-test/

function myblock_init()
{
    register_block_type_from_metadata(__DIR__);
}

add_action("init", "myblock_init");