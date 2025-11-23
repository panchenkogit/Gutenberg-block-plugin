<?php
// Plugin Name: Dynamic Posts
// Plugin URI: https://woo-test/
// Description: Gutenberg Dynamic Block
// Author: Me
// Author URI: https://woo-test/

function myblock_latest_posts_block($attributes)
{
    $arg = array(
        'posts_per_page' => $attributes['postsPerPage'],
        'post_status' => 'publish'
    );
    $latest_posts = get_posts($arg);

    $html = "<div " . get_block_wrapper_attributes() . ">";
    if (!empty($latest_posts)) {
        foreach ($latest_posts as $post) {
            $html .= "<div>";
            if ($attributes['showImage'] && has_post_thumbnail($post)) {
                $html .= wp_kses_post(get_the_post_thumbnail($post, 'large'));
            }
            $html .= "<time datetime='" . esc_attr(get_the_date('c', $post)) . "'>" . esc_html(get_the_date('', $post)) . "</time>";
            $html .= "<h2><a href='" . esc_url(get_the_permalink($post)) . "'>" . esc_html(get_the_title($post)) . "</a></h2>";
            $html .= "</div>";
        }
    }
    $html .= "</div>";
    return $html;
}
function dynamicblock_init()
{
    register_block_type_from_metadata(__DIR__, array(
        "render_callback" => 'myblock_latest_posts_block'
    ));
}

add_action("init", "dynamicblock_init");
