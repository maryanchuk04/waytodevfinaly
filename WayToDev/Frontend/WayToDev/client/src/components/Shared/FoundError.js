import React from 'react';

import './FoundError.css';

function FoundError() {
	return (
		<div class="foundError">
			<div class="error">
				<div class="wrap">
					<div class="404">
						<pre>
							<code>
								<span class="green">&lt;!</span>
								<span>DOCTYPE html</span>
								<br />
								<span class="green">&gt;</span>
								<br />
								<span class="orange">&lt;html&gt;</span>
								<br />
								<span class="orange">&lt;style&gt;</span>
								<br />
								<span class="green">everything</span>:<br />
								<span class="blue">awesome</span>;<br />
								<span class="orange">&lt;/style&gt;</span>
								<br />
								<span class="orange">&lt;body&gt;</span>
								<br />
								ERROR 404! FILE NOT FOUND!
								<span class="comment">
									&lt;!--The file you are looking for, is not
									where you think it is.--&gt;
								</span>
								<span class="orange"></span>
							</code>
						</pre>
					</div>
					<br />
					<span class="info">
						<br />
					</span>
					<span class="orange">&nbsp;&lt;/body&gt;</span>
					<br />
					<span class="orange">&lt;/html&gt;</span>
				</div>
			</div>
		</div>
	);
}
export default FoundError;
