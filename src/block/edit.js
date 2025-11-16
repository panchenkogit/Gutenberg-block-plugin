import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
	Spinner,
	ToolbarButton,
	PanelBody,
	TextControl,
} from '@wordpress/components';
import { isBlobURL } from '@wordpress/blob';

export default function Edit({ attributes, setAttributes }) {
	const { title, description, image_id, image_url, image_alt } = attributes;

	const onSelect = (val) => {
		setAttributes({
			image_id: val.id,
			image_url: val.url,
			image_alt: val.alt,
		});
	};

	const onSelectURL = (val) => {
		setAttributes({
			image_id: undefined,
			image_url: val,
			image_alt: '',
		});
	};
	return (
		<div>
			{image_alt && !isBlobURL(image_url) && (
				<InspectorControls>
					<PanelBody title={__('Settings for image', 'myblocks')}>
						<TextControl
							label={__('Change Alt', 'myblocks')}
							value={image_alt}
							help={__('Change Alt text', 'myblocks')}
							onChange={(val) => setAttributes({ image_alt: val })}
						/>
					</PanelBody>
				</InspectorControls>
			)}
			{image_url && (
				<BlockControls>
					<MediaReplaceFlow
						name={__('Заменить', 'myblocks')}
						onSelect={onSelect}
						onSelectURL={onSelectURL}
						accept='image/*'
						allowedTypes={['image']}
						mediaId={image_id}
						mediaURL={image_url}
					></MediaReplaceFlow>
					<ToolbarButton
						onClick={() =>
							setAttributes({
								image_id: undefined,
								image_url: undefined,
								image_alt: undefined,
							})
						}
					>
						{__('Удалить картику', 'myblocks')}
					</ToolbarButton>
				</BlockControls>
			)}
			<div {...useBlockProps()}>
				{!image_url ? (
					<MediaPlaceholder
						onSelect={onSelect}
						onSelectURL={onSelectURL}
						accept='image/*'
						allowedTypes={['image']}
					/>
				) : (
					<div
						className={`image ${isBlobURL(image_url) ? 'is_loading' : 'loaded'}`}
					>
						<img src={image_url} alt={image_alt} id={image_id} />
						{isBlobURL(image_url) && <Spinner />}
					</div>
				)}

				<RichText
					tagName='h2'
					value={title}
					allowedFormats={[]}
					placeholder={__('Your Title', 'myblocks')}
					onChange={(val) => setAttributes({ title: val })}
				/>
				<RichText
					tagName='p'
					value={description}
					allowedFormats={[]}
					placeholder={__('Your Description', 'myblocks')}
					onChange={(val) => setAttributes({ description: val })}
				/>
			</div>
		</div>
	);
}
