import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import {
	PanelBody,
	ToggleControl,
	SelectControl,
	QueryControls,
} from '@wordpress/components';
import { format, dateI18n, getSettings } from '@wordpress/date';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { postsPerPage, showImage, order, orderBy } = attributes;

	const posts = useSelect((select) =>
		select('core').getEntityRecords(
			'postType',
			'post',
			{
				per_page: postsPerPage,
				_embed: true,
				order: order,
				orderby: orderBy,
			},
			[postsPerPage, order, orderBy]
		)
	);

	const blockProps = useBlockProps();

	const onChangeToggleImage = (value) => {
		setAttributes({ showImage: value });
	};
	const onChangePostsPerPage = (value) => {
		setAttributes({ postsPerPage: value });
	};
	const onChangeOrder = (value) => {
		setAttributes({ order: value });
	};
	const onChangeOrderBy = (value) => {
		setAttributes({ orderBy: value });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title='Settings'>
					<ToggleControl
						label='Display Images'
						checked={showImage}
						onChange={onChangeToggleImage}
					/>
					<QueryControls
						numberOfItems={postsPerPage}
						onNumberOfItemsChange={onChangePostsPerPage}
						maxItems={10}
						minItems={1}
						order={order}
						onOrderChange={onChangeOrder}
						orderBy={orderBy}
						orderByChange={onChangeOrderBy}
					/>
					<SelectControl
						label='Order'
						value={order}
						options={[
							{ label: 'Descending', value: 'desc' },
							{ label: 'Ascending', value: 'asc' },
						]}
						onChange={onChangeOrder}
					/>

					<SelectControl
						label='Order By'
						value={orderBy}
						options={[
							{ label: 'Date', value: 'date' },
							{ label: 'Title', value: 'title' },
							{ label: 'Menu Order', value: 'menu_order' },
						]}
						onChange={onChangeOrderBy}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				{posts?.map((post) => {
					const featuredImage =
						post._embedded?.['wp:featuredmedia']?.[0] ?? null;
					const imageUrl =
						featuredImage?.media_details?.sizes?.large?.source_url ?? '';
					const imageAlt = featuredImage?.alt_text ?? '';

					return (
						<div key={post.id}>
							{showImage && imageUrl && <img src={imageUrl} alt={imageAlt} />}

							{post.date_gmt && (
								<time dateTime={format('c', post.date_gmt)}>
									{dateI18n(getSettings().formats.date, post.date_gmt)}
								</time>
							)}

							<h2>
								<a href={post.link}>{post.title.rendered}</a>
							</h2>
						</div>
					);
				})}
			</div>
		</>
	);
}
