import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>School</th>
								<th>Degree</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>GEORIA INSTITUTE OF TECHNOLOGY</td>
								<td>Online Master of Science in Computer Science</td>
								<td>Present</td>
							</tr>
							<tr>
								<td>THE GEORGE WASHINGTON UNIVERSITY</td>
								<td>Master of Science in Business Analytics</td>
								<td>May 2020</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
